
import java.util.ArrayList;
import java.util.Locale;
import java.util.Scanner;
public class Students {
   private String photoUrl;

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFaltas() {
        return faltas;
    }

    public void setFaltas(String faltas) {
        this.faltas = faltas;
    }

    private String identification;
    private String nombre;
    private String faltas;



public static void main(String[] arg) {
    Scanner inputData = new Scanner(System.in);





    ArrayList<Students> data = new ArrayList();
    String condicion;
    condicion = "SI";

    while (condicion.equalsIgnoreCase("SI")){



            Students person = new Students();
            System.out.println("Ingrese el enlace de la foto : ");
            person.setPhotoUrl(inputData.nextLine());
            System.out.println("ingrese el nombre del estudiante :");
            person.setNombre(inputData.nextLine());
            System.out.println("Ingrese el id del estudiante :");
            person.setIdentification(inputData.nextLine());
            data.add(person);


        System.out.println("¿Desea agregar más datos?  -SI -NO");
        condicion = (inputData.nextLine());




    }


    for(int i=0; i<data.size();i++){

        System.out.println(" Nombre "+data.get(i).getNombre());


    }

    System.out.println("Escribra el nombre del estudiante que desea buscar :");
    String nombreQuequiere= inputData.nextLine();

    for(int i=0;i<data.size();i++){

       if(data.get(i).getNombre().equalsIgnoreCase(nombreQuequiere)){
           System.out.println(data.get(i).getNombre()+" Esta en la base de datos");
           break;
       }
       else {
           System.out.println(" No esta ahi");
           break;
       }

    }

//eliminar un dato

    for(int i=0;i<data.size();i++){

        if(data.get(i).getNombre().equalsIgnoreCase(nombreQuequiere)){
            data.remove(i);
            break;
        }




    }


//actualizar

    System.out.println("Ingrese la identificación");
    String idt= inputData.nextLine();

    for(int i=0;i<data.size();i++){

        if(data.get(i).getIdentification().equalsIgnoreCase(idt)){
            Students student=data.get(i);
            System.out.println("Ingrese nueva identificacion");
            String ident= inputData.nextLine();
            student.setIdentification(ident);
            data.set(i,student);

            break;
        }




    }







}






}
