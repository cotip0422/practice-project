package mycode;

public class gittest {
   
    public static void main(String[] args) {
        System.out.println("hello world");
        int a;
        a = 10;
        int b = 10;
        double c;
        c= 3.5;
        System.out.println(a + b +  c);
        int money;
        //money 변수를 조정하여 결과물을 변경해보세요!
        money = 1;
        if(money == 1500 || money > 1500){
          System.out.println("아이스크림을 샀다!");
        }
        else if(money > 1000 || money == 1000){
            System.out.println("바를 샀다!");
        }
        else{
            System.out.println("돈이 부족하다!");
        }
    }
}
