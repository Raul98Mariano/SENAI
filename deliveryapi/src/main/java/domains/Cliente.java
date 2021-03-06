package domains;

import org.json.JSONException;
import org.json.JSONObject;

public class Cliente {

	private int idCliente;
	private String nomeCompleto;
	private String telefone;
	private String cpf;
	private String endereco;

	public Cliente() {

	}

	public Cliente(int idCliente, String nomeCompleto, String telefone, String cpf, String endereco) {

		this.idCliente = idCliente;
		this.nomeCompleto = nomeCompleto;
		this.telefone = telefone;
		this.cpf = cpf;
		this.endereco = endereco;

	}

	public Cliente(String idCliente, String nomeCompleto, String telefone, String cpf, String endereco) {

		this.idCliente = Integer.valueOf(idCliente);
		;
		this.nomeCompleto = nomeCompleto;
		this.telefone = telefone;
		this.cpf = cpf;
		this.endereco = endereco;

	}

	public int getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		return idCliente + "\t" + nomeCompleto + "\t" + telefone + "\t" + cpf + "\t" + endereco + "\n";
	}
	
	public JSONObject toJSON() {
		JSONObject json = new JSONObject();
		try {
			json.put("idEntregador", this.idCliente);
			json.put("nomeCompleto", this.nomeCompleto);
			json.put("veiculo", this.telefone);
			json.put("veiculo", this.cpf);
			json.put("veiculo", this.endereco);
		} catch (JSONException e) {
			System.out.println("Erro na conversÃ£o JSON " + e);
		}		
		return json;
	}
	
}
