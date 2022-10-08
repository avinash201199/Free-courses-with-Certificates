import java.util.*;
import java.lang.*;
import java.io.*;
class Main {  
public static void main(String[] args) {  
    int[] myarray = {5,8,10,13,21,23,25,43,54,75};  
    int key, location = -1;  
    System.out.println("The input array is");
    for(int i=0;i<10;i++){ System.out.print(myarray[i]+" "); } System.out.println(); System.out.println("Enter the key to be searched"); Scanner sc = new Scanner(System.in); key = sc.nextInt(); location = binarySearch(myarray,0,9,key); if(location != -1) System.out.println("the location of the key is "+location); else System.out.println("Key not found"); } public static int binarySearch(int[] myarray, int beg, int end, int key) { int mid; if(end >= beg)   
    {     
        mid = (beg + end)/2;  
        if(myarray[mid] == key)  
        {  
            return mid+1;  
        }  
        else if(myarray[mid] < key)   
        {  
            return binarySearch(myarray,mid+1,end,key);  
        }  
        else  
        {  
            return binarySearch(myarray,beg,mid-1,key);  
        }  
       
    }  
    return -1;   
}  
}