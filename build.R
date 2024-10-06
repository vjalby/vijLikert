install.packages('jmvtools', repos=c('https://repo.jamovi.org', 'https://cran.r-project.org'))
options(jamovi_home='/Applications/jamovi')
options(jamovi_home='/Applications//jamovi-x86_64')
jmvtools::check()



jmvtools::create('vijLikert') # Module Name

jmvtools::addAnalysis(name='likertplot', title='Likert Plot') # name = function/files name, title = menu item name

jmvtools::install()

