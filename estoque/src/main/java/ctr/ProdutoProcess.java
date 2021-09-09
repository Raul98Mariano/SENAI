package ctr;

import java.util.ArrayList;

import vo.Produto;
import vo.dao.ProdutoDAO;

public class ProdutoProcess {

	public static ArrayList<Produto> produtos;
	public static ProdutoDAO pd;

	public static void testes() {
		produtos = new ArrayList<>();
		produtos.add(new Produto(1, "Chave de Fenda ", "Apertar parafusos ", 10.99f, 12));
		produtos.add(new Produto(2, "Chave de Roda ", "Apertar parafusos da roda ", 45.49f, 2));
		produtos.add(new Produto(3, "Pneu ", "175/65/R13 ", 199.90f, 28));
		produtos.add(new Produto(4, "Pneu ", "185/70/R14 ", 210.50f, 24));
		produtos.add(new Produto(5, "Pneu ", "185/60/R17 ", 225.34f, 20));

	}

	public static void abrir() {
		produtos = pd.abrir();
	}

	public static void salvar() {
		pd.salvar(produtos);
	}
}
