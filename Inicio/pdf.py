from fpdf import FPDF

# Create instance of FPDF class
pdf = FPDF()

# Add a page
pdf.add_page()

# Set title
pdf.set_font("Arial", size = 16)
pdf.cell(200, 10, txt = "Cronograma de Estudos", ln = True, align = 'C')

# Add a table
pdf.set_font("Arial", size = 12)

# Table Header
pdf.cell(40, 10, "Dia da Semana", 1, 0, 'C')
pdf.cell(120, 10, "Curso", 1, 0, 'C')
pdf.cell(30, 10, "Horas", 1, 1, 'C')

# Table Rows
schedule = [
    ("Segunda", "Curso Web Moderno Completo com JavaScript + Projetos", "2h"),
    ("Terça", "Git Completo: Do Básico ao Avançado", "1h"),
    ("", "Docker (Combinação dos três cursos)", "1h"),
    ("Quarta", "Curso Web Moderno Completo com JavaScript + Projetos", "2h"),
    ("Quinta", "Git Completo: Do Básico ao Avançado", "1h"),
    ("", "Docker (Combinação dos três cursos)", "1h"),
    ("Sexta", "Curso Web Moderno Completo com JavaScript + Projetos", "2h"),
    ("Sábado", "Revisão e prática (alternando entre os cursos)", "3h"),
    ("Domingo", "Descanso/Tempo livre", "-")
]

for day, course, hours in schedule:
    pdf.cell(40, 10, day, 1)
    pdf.cell(120, 10, course, 1)
    pdf.cell(30, 10, hours, 1, 1)

# Add additional details
pdf.ln(10)
pdf.cell(200, 10, txt = "Revisão e Prática (Sábados)", ln = True)

revisao_pratica = [
    ("Semana 1-2:", "1h Curso Web"),
    ("", "1h Git"),
    ("", "1h Docker"),
]

for week, detail in revisao_pratica:
    pdf.cell(40, 10, week, 0)
    pdf.cell(160, 10, detail, 0, 1)

pdf.ln(10)
pdf.cell(200, 10, txt = "Resumo Semanal", ln = True)

resumo_semanal = [
    ("Curso Web", "6 horas (2h x 3 dias)"),
    ("Git", "2 horas (1h x 2 dias)"),
    ("Docker", "2 horas (1h x 2 dias)"),
    ("Revisão e prática", "3 horas no sábado, alternando os cursos"),
]

for course, summary in resumo_semanal:
    pdf.cell(60, 10, course, 0)
    pdf.cell(140, 10, summary, 0, 1)

# Save the PDF
file_path = "C:\\Users\\rafael\\Desktop\\Cronograma_de_Estudos.pdf"
pdf.output(file_path)

print(f"PDF gerado com sucesso: {file_path}")
