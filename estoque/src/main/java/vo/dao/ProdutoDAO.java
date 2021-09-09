package vo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import vo.Produto;

public class ProdutoDAO {

	private BufferedWriter bw;
	private BufferedReader br;
	private String arquivo = "c:\\dbs\\produtos.csv";
	private ArrayList<Produto> produtos;
	private Produto produto;

	public ArrayList<Produto> abrir() {
		produtos = new ArrayList<>();
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = null;
			while ((linha = br.readLine()) != null) {
				produto = new Produto(linha.split(";"));
				produtos.add(produto);
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo nao encontrado " + e);
		} catch (IOException e) {
			System.out.println("Erro ao abrir arquivo " + e);
		}
		return produtos;
	}

	public boolean salvar(ArrayList<Produto> produtos) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (Produto c : produtos) {
				bw.write(c.toCSV());
			}
			bw.close();
			return true;
		} catch (IOException e) {
			System.out.println("Erro ao gravar arquivo " + e);
			return false;
		}
	}

}