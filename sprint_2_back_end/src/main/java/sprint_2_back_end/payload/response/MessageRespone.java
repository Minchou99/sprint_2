package sprint_2_back_end.payload.response;

public class MessageRespone {
    private String message;

    public MessageRespone() {
    }

    public MessageRespone(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
