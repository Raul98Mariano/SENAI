package view;

import java.io.IOException;
import java.io.PrintWriter;

import control.ChamadoControll;
import model.ChamadoModel;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/chamados")
public class Chamados extends HttpServlet {
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		int id = Integer.parseInt(req.getParameter("id"));
		
		ChamadoControll cc = new ChamadoControll();
		
		String data = cc.listar();
		
		pw.write(data);
		
		//pw.write("REQUISI플O LISTAR");
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		
		int id = Integer.parseInt(req.getParameter("id"));
		String data = req.getParameter("data");
		String status = req.getParameter("status");
		String responsavel = req.getParameter("responsavel");
		float valor = Float.parseFloat(req.getParameter("valor"));
		
		ChamadoModel cm = new ChamadoModel(id, data, status, responsavel, valor);
		
		ChamadoControll cc = new ChamadoControll();
		
		String ret = cc.cadastrar(cm);
		
		if(ret.equals("")) {
			resp.setStatus(400);
		}else {
			resp.setStatus(201);
		}
		
		pw.write(ret);
		
		//pw.write("REQUISI플O INSERIR");
	}
	
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		//pw.write("REQUISI플O EXCLUIR");
	}
	
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		//pw.write("REQUISI플O ALTERAR");
	}
}
