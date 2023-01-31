package sprint_2_back_end.service.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sprint_2_back_end.model.product.Image;
import sprint_2_back_end.repository.product.IImageRepository;

import java.util.List;
@Service
public class ImageService implements IImageService{
    @Autowired
    private IImageRepository imageRepository;
    @Override
    public List<Image> getImages() {
        return imageRepository.findAll();
    }
}
