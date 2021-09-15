package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import model.ChamadoModel;

public class ChamadoControll {

	public String cadastrar(ChamadoModel cm) {
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("d:/base.csv", true));
			bw.write(cm.toCSV());
			bw.close();
			return cm.toCSV();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return "";
	}

	public String listar() {

		try {
			BufferedReader br = new BufferedReader(new FileReader("d:/base.csv"));
			String linha = "";
			String retorno = "";

			while ((linha = br.readLine()) != null) {
				retorno += linha +"\r\n";
			}

			br.close();

			return retorno;
		} catch (IOException e) {
			e.printStackTrace();
		}
		// return "{id:" + id + ", data:'15/09/2021', status:'em andamento',
		// problema:'Impressora não liga'}";
		return "";
	}
}
