package food.example.foodapi.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import food.example.foodapi.io.FoodRequest;
import food.example.foodapi.io.FoodResponse;
import food.example.foodapi.service.FoodService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/foods")
@AllArgsConstructor
@CrossOrigin("*")
public class FoodController {

    private final FoodService foodService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping
    public FoodResponse addFood(@RequestPart("food") String foodJson,
                                @RequestPart("file") MultipartFile file) throws IOException {
        try {
            FoodRequest foodRequest = objectMapper.readValue(foodJson, FoodRequest.class);
            return foodService.addFood(foodRequest, file);
        } catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format", ex);
        }
    }

    @GetMapping
    public List<FoodResponse> getAllFoods() {
        return foodService.readFoods();
    }

    @GetMapping("/{id}")
    public FoodResponse getFoodById(@PathVariable String id) {
        return foodService.readFood(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFood(@PathVariable String id) {
        foodService.DeleteFood(id);
    }
}
