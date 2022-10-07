    import java.util.Scanner;
    public class Loop {
    public static void main(String[] args) {  
        int i=1;  
        int num, j ,k ;
        do{  
            System.out.println(  i);  
        i++;  
        }while(i<=10);   
        System.out.println("enter any number:");
      Scanner s = new Scanner( System.in);
      num= s.nextInt();
    for(j=1;j<10;j++)
    {
    System.out.println(num*j);
    }  
    System.out.println("enter any value:");
    Scanner sc= new Scanner(System.in);
    num = sc.nextInt();
    while(num>=0)
    {
        if (num%2==0)
        {
    System.out.println("even number");
    break;
    }
    else
    {
        System.out.println(" odd number");
        break;
    }
    }
    }
    }
