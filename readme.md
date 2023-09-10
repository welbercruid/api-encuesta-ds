API de encuestas  
Crea una API que permita gestionar encuestas y que los usuarios puedan votar.  
Tu API debe contener al menos 4 endpoints:  
* Crear preguntas.  
* Crear respuesta (debe asociarse a una pregunta) . 
* Votación (se puede votar una respuesta).  
* Reportes (debe mostrar los resultados de cada pregunta).  

Ejemplo:  
Tu aplicación debe permitir generar una encuesta de este tipo:    
¿Qué color preferís? 
- Blanco  
- Negro  
- Azul  

¿Cuál es tu marca de autos favorita?  
- Ford  
- Chevrolet  

Ejemplo de reportes:

Reportes  

¿Qué color preferís?  
Blanco - 38 votos  
Negro - 11 votos  
Azul - 24 votos  

¿Cuál es tu marca de autos favorita?  
Ford - 29 votos  
Chevrolet - 31 votos  

Postman  
//pregunta  
{
    "pregunta": "¿Cuál es tu color favorito?"
} 


//respuesta
{   
"respuesta": "Blanco",  
"nombre": "Juan"  
}
