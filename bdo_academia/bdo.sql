CREATE DATABASE pombascar;

USE pombasScar;

CREATE TABLE estados(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	estado VARCHAR(2) NOT NULL UNIQUE 
);

CREATE TABLE cidades(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	cidade varchar(50) NOT NULL,
	id_estado INTEGER NOT NULL,
	CONSTRAINT id_estado_fk FOREIGN KEY (id_estado) REFERENCES estados (id)
);

CREATE TABLE veiculos(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	veiculo VARCHAR(15) NOT NULL, 
	preco FLOAT(7, 2) NOT NULL
);

CREATE TABLE vendedor(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(153) NOT NULL,
	id_cidade INTEGER NOT NULL,
	CONSTRAINT id_cidade_fk FOREIGN KEY (id_cidade) REFERENCES cidades (id)
);

CREATE TABLE vendas(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	data DATE NOT NULL,
	id_vendedor INTEGER NOT NULL,
	CONSTRAINT id_vendedor_fk FOREIGN KEY (id_vendedor) REFERENCES vendedor(id)
);

CREATE TABLE descricao_vendas(
	id_venda INTEGER NOT NULL,
	id_veiculo INTEGER NOT NULL,
	CONSTRAINT id_venda_fk FOREIGN KEY (id_venda) REFERENCES vendas(id),
	CONSTRAINT id_veiculo_fk FOREIGN KEY (id_veiculo) REFERENCES veiculos(id)
	
);