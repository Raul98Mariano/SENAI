package domains;

import org.json.JSONException;
import org.json.JSONObject;

public class Item {

	private Pedido pedido;
	private Produto produto;
	private int quantidade;
	
	public Item() {

	}
	
	public Item(Pedido pedido, Produto produto, int quantidade) {

		this.pedido = pedido;
		this.produto = produto;
		this.quantidade = quantidade;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public double getSubTotal() {
		return quantidade * produto.getPreco();
	}
	
	@Override
	public String toString() {
		return pedido.getId() + "\t" + produto.getIdProduto() + "\t" + quantidade + "\n";
	}
	
	public JSONObject toJSON() {
		JSONObject json = new JSONObject();
		try {
			json.put("pedido", pedido.getId());
			json.put("produto", produto.getIdProduto());
			json.put("quantidade", this.quantidade);
		} catch (JSONException e) {
			System.out.println("Erro na conversÃ£o JSON " + e);
		}		
		return json;
	}
	
	

}
