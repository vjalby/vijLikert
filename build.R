install.packages('jmvtools', repos=c('https://repo.jamovi.org', 'https://cran.r-project.org'))
jmvtools::check()

jmvtools::create('vijLikert') # Module Name

jmvtools::addAnalysis(name='likertplot', title='Likert Plot') # name = function/files name, title = menu item name

jmvtools::install()
