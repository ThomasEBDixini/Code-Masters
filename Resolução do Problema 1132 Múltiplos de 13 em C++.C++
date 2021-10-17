#include <iostream>
#include <locale>
#include <cstdlib>

using namespace std;

int main(){
 setlocale(LC_ALL,"Portuguese");
 
	 int n1, n2, i, soma;
	 
	 soma = 0;
	 cout <<"Digite qualquer número\n";
	 cin>>n1;
	 
	 cout <<"Digite outro qualquer número\n";
	 cin>>n2;
	 
	 if (n1<n2){
	  for(i=n1;i<=n2;i++){
	   if(i%13!=0){
	    soma +=i;
	   }
	  }
	 }else{
	  for (i=n2;i<=n1;i++){
	   if(i%13!=0){
	    soma+=i;
	   }
	  }
	 }
	 cout<<"A soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos é igual a: "<<soma;
	 
	
	 return 0;
	}