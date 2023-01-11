package sprint_2_back_end.model.payment;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import sprint_2_back_end.model.product.Product;

import javax.persistence.*;

@Entity
public class PaymentDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    @Column(columnDefinition = "boolean default false")
    private String isDelete;

    @ManyToOne
    @JoinColumn(name = "payment_id", referencedColumnName = "id")
    @JsonManagedReference
    private Payment payment;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    @JsonManagedReference
    private Product product;

    public PaymentDetail() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
