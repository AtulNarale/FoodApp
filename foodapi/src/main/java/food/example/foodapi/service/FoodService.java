package food.example.foodapi.service;

import food.example.foodapi.io.FoodRequest;
import food.example.foodapi.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface FoodService {

       FoodResponse addFood(FoodRequest foodRequest, MultipartFile file) throws IOException;

       List<FoodResponse> readFoods();

       FoodResponse readFood(String id);

       void DeleteFood(String id);
}
