package sprint_2_back_end.model.product;

import com.fasterxml.jackson.annotation.JsonBackReference;
import sprint_2_back_end.model.product.Category;

import javax.persistence.*;
import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double price;
    private String startDate;
    private String origin;
    private String color;
    private String size;
    private String description;
    private Boolean isDelete;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @JsonBackReference
    @OneToMany(mappedBy = "image")
    private List<Image> images;

    public Product() {
    }


}
