# Condicionales
    Los condicionales en pug funcionan igual que en JavaScript pero sin paréntesis ni llaves
      if username
        p Bienvenido usuario
      else
        p Registrese para continuar

      if username
        p Bienvenido usuario
      else if username == null
        p username no existe
      else 
        p Registrese para continuar

    El operador ternario funciona igual que en JavaScript
      p(class= username ? 'registered' : 'unregistered')

    Tenemos un equivalente al operador de negación pero que apenas se utiliza
      unless username

      equivale a

      if !username