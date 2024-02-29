1. Creamos un nuevo proyecto con el comando: ng new "Nombre"

2. Ejecutamos ng s -o para correr el proyecto en el browser

3. Importamos ReactiveFormsModule (vamos a src/app/app.config.ts) para luego añadir ReactiveFormsModule a los proveedores

4. Usamos un servicio de angular para construir los FormGroups facilmente. Creamos un constructor al que le inyectamos un 
   servicio

5. Una vez importados estamos listos para utilizar app.component.html. Nos dirigimos a "src/app/app.component.ts" y creamos la
   variable "form" y el tipo será "FormGroup". (Recuerden importarlo)

6. Ahora cada propiedad reflejará el campo del form

AHORA CREAMOS LO VISUAL (es algo básico)

7. En "src/app/app.component.html", añadimos un botón que dice: "AddUser" con un style básico

8. Agregamos una tabla y un json que muestren los valores del form. (La cual estará ligeramente estilizada en app.component.css).

// Naturalmente no se ve nada porque no hay datos aún.
// Toca un viaje rápido a app.component.ts para añadir la línea: "showForm = false;" y creamos el método showFormMethod
// Pueden dejarlo en true de momento para evitar darle click al botón para ver las actualizaciones

9. Ahora modificamos el botón para que al darle click añada un usuario usando el metodo showFormMethod, primero creamos la 
etiqueta form. En esta incluimos otras 2 etiquetas input y una más button las cuales estilizamos.

10. Ahora, haciendo uso de [formGroup]="form" en la etiqueta form, escribimos formControlName="___" de cada input.
// Ahora debería estar actualizandose a tiempo real pero no guardarse, es normal.

11. Ahora creamos el botón "Add Contact" que ejecutará el método addContact(). Usando el arreglo 'contacts' (y definiendo sus 
    propiedades) de app.component.ts, creamos un nuevo div con formArrayName="contacts".

12. Dentro del nuevo div crearemos el nuevo botón "Delete", que al darle click activará el método deleteContact()

13. Vamos a app.component.ts y creamos tanto deleteContact() como addContact(), además de otros 2: onSubmit() y get contacts()
/*
get contacts() es un método getter en la clase AppComponent. Este método getter devuelve una referencia al control de 
formulario contacts en el formulario principal. as FormArray es una aserción de tipo en TypeScript. Está diciendo al 
compilador de TypeScript que trate el resultado de this.form.get('contacts') como un FormArray.
*/

14. Ahora, después del botón Delete, crearemos un ng-container que contenga dos divs similares a los de nombre, email y ciudad.
/*
El <ng-container> nos permite utilizar directivas estructurales sin ningún elemento extra, asegurándonos de que los únicos 
cambios DOM que se aplican son los dictados por las propias directivas.
Esto no solo aumenta el rendimiento (aunque sea ligeramente) ya que el navegador termina renderizando menos elementos, sino 
que también puede ser un activo valioso para tener DOM y estilos más limpios por igual.
*/

15. Por último, hacemos que el botón submit muestre, en una alerta, el json con todos los datos de nuestro form mediante el
método onSubmit().


EN CONCLUSIÓN:
Uso de FormGroup y FormArray: El formulario se crea utilizando FormGroup, que es una parte clave de los formularios reactivos 
en Angular. Un FormGroup agrupa los controles de formulario, lo que permite validar y guardar un grupo de campos de formulario 
como una unidad. Además, se utiliza FormArray para manejar un número variable de controles de formulario, lo que permite 
agregar y eliminar controles de forma dinámica.

Uso de formControlName: La directiva formControlName se utiliza para enlazar cada control de entrada en la plantilla a un 
control de formulario en la instancia del componente.

Formulario dinámico: El formulario se muestra y oculta dinámicamente en función de la variable showForm. Además, se pueden 
agregar y eliminar controles de formulario de forma dinámica utilizando los métodos addContact y deleteContact.

Uso de *ngFor: La directiva *ngFor se utiliza para iterar sobre los controles en el FormArray, lo que permite crear un número 
dinámico de controles de formulario.

Uso de *ngIf: La directiva *ngIf se utiliza para mostrar u ocultar el formulario en función de la variable showForm.

Uso de [formGroupName]: La directiva [formGroupName] se utiliza para enlazar cada grupo de controles en el FormArray a un 
FormGroup.
