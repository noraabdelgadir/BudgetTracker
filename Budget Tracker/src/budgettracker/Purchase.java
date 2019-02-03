package budgettracker;

public class Purchase {
	
	private String name;
	private String category;
	private Double price;
	
	public Purchase(String name, String category, Double price) {
		this.name = name;
		this.category = category;
		this.price = price;
	}

	@Override
	public String toString() {
		return "Purchase [name=" + name + ", category=" + category + ", price=" + price + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

}
