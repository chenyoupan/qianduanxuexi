/*   打印九九乘法表
var i,j;
for(i=1;i<10;i++)
{
    for(j=1;j<i+1;j++)
    {
        document.write(i+'x'+j+'='+(i*j));
        document.write("&nbsp &nbsp")
    }
    document.write("<br>");
}
*/

/*
//字符串方法  charAt 获取字符串中某个字符
var str = "i love you";
console.log(str.charAt(3));//输出str字符串的第四个字符（从0开始）
console.log(str.charAt(str.length-1));//输出str字符串的最后一个字符
console.log(str.charAt(-1));//charAt内不能为负，为负则输出为空
//超出字符串范围同样输出为空
*/

/*
//字符串方法 concat 连接两个字符串 如果参数不是字符串，会把参数转换为字符串，然后连接
var str1 = "abc";
var str2 ="def";
var str3 = 100;
var str4=str1.concat(str2,str3);
console.log(str4);//abcdef100
console.log(typeof str3);//number
//单纯的字符串相加并不需要concat 使用+号连接即可
console.log(str1+str2);//abcdef
*/

/* 使用+连接变量时注意事项
//使用+号相加时，直到遇到字符串之前数值类型依然会相加，遇到字符串后，之后的数值也按字符串处理
var str1="abc";
var num1=100;
var num2=200;
var num3=300;
var num4=400;
console.log(num1+num2+str1+num3+num4)  //输出为300abc300400
*/

/*
//字符串方法 substring 提取字符串中某一段字符串 不改变原来字符串的值
//第一个参数为开始位置，第二个参数为结束位置，但并不返回结束位置的值
var str1="i love you";
console.log(str1.substring(2,5));//lov
console.log(str1.substring(2,6));//love
console.log(str1);//i love you
//如果省略了第二个参数，那么默认会一直到原字符串结束
console.log(str1.substring(2));//love you
//如果第二个参数小于第一个参数，则会自动互换两个参数位置
console.log(str1.substring(6,2));//love
//如果某参数为负，则负自动转换为0
console.log(str1.substring(2,-6));//i
*/

/*
//字符串方法substr 与substring效果相同 第一个参数为开始位置，第二个参数为长度
//第一个参数为负，则代表倒着数，第二个参数为负，则代表输出空字符串
var str ="abcdefg";
console.log(str.substr(0,4));//abcd
console.log(str.substr(-2,2));//fg  倒数从一开始，负多少就是倒数第几个
console.log(str.substr(2,-1));//空
*/

/*
//字符串方法indexOf 很常用，重点
//返回某字符串在字符串中的位置 匹配成功返回下标，匹配失败返回-1
var str ="我们的距离忽远又忽近"
console.log(str.indexOf("距离"));//3
//接收第二个参数，从第二个参数位置开始向后搜索
console.log(str.indexOf("距离",3));//3
console.log(str.indexOf("距离",7));//-1
*/

/*
//字符串方法trim 去除字符串两端空格及制表符 返回一个新的字符串，不改变原有字符串
var str1 ="    hello";
console.log(str1);
console.log(str1.trim());
var str2 ="\r\t    hello   \n";
console.log(str2);
console.log(str2.trim());
//字符串中间的不能去掉
var str3 ="he   llo";
console.log(str3.trim());
//ES6中新方法  trimStrat 只去开始空格等  trimEnd 只去尾部空格等
*/

/* 
//字符串方法 split 以传入的参数分割字符串,生成一个数组 不改变原字符串
var str1="wodenameisjc"
console.log(str1.split("e")); // ['wod', 'nam', 'isjc']  此时str1仍是'wodenameisjc'
//若参数为空字符串，则分割每一个元素
console.log(str1.split(''));// ['w', 'o', 'd', 'e', 'n', 'a', 'm', 'e', 'i', 's', 'j', 'c']
//若无参数，则不切割，但仍生成数组
console.log(str1.split());// ['wodenameisjc']
//接收第二个参数，设置取出字符串个数 
console.log(str1.split('e',2));// ['wod', 'nam']
console.log(str1.split('e',4));// ['wod', 'nam', 'isjc'] 超出返回全部
*/
/*
//数组方法 Array.isArray 判断变量是不是数组 是返回true 否返回false
var arr1=[];
var num=0;
console.log(Array.isArray(arr1));//true
console.log(Array.isArray(num));//false
*/
/*
//数组方法 pop push   会改变原数组  返回值是操作后的原数组长度
var arr1=['abc','def'];
arr1.pop();
var arr2=arr1.push('lol');
console.log(arr1);// ['abc','lol']
console.log(arr2);// 2   返回值为长度
*/
/*
//数组方法 shift 删除数组第一个元素，并返回第一个元素的值，改变原数组
//数组方法 unshift 添加元素到第一个元素，并返回添加后的数组长度，改变原数组的值
//使用shift方法可以遍历并清空数组
var arr1=[100,200,300];
var temp;
while(temp=arr1.shift()){
    console.log(temp);
}
console.log(arr1);// 100 200 300 空
//unshift 方法可以接收多个参数，添加到数组头部
console.log(arr1.unshift('abc',200));// 2
console.log(arr1);// ['abc',200]
*/
/*
//数组方法 join 以参数为分隔符，将多个数组成员连接为一个字符串返回，如果没有参数，则默认用逗号分隔
var arr1=[1,2,3,4];
console.log(arr1.join()); // 1,2,3,4
console.log(arr1.join(''));// 1234
console.log(arr1.join('e'));// 1e2e3e4
// 当数组内容为空或null或undefined时，自动转为空字符
var arr2=[1, ,3,4];
console.log(arr2.join(''));// 134
//数组方法join配合字符串方法的split可以实现字符串和数组的互换
var arr3=['abc','de','fg'];
var temp;
temp=arr3.join(' ');
console.log(temp);// abc de fg
console.log(temp.split(' '));// ['abc','de','fg']
*/
/*
//数组方法concat 将新数组添加到原数组尾部，返回一个新数组，原数组保持不变
//应用场景 上拉加载，合并数据
var arr1=['abc',200];
var arr2=['de',100];
var arr3=arr1.concat(arr2);
console.log(arr1);//['abc',200]
console.log(arr2);//['de',100]
console.log(arr3);// ['abc',200,'de',100]
//不只可以接收数组作为参数，其他也可以
//最终结果是一个一维数组
console.log(arr1.concat(100,'fg',[7,8]));//['abc',200,100,'fg',7,8]
*/
/*
//数组方法reverse 反转 改变原数组
var arr1=[1,2,3,4,5];
arr1.reverse();
console.log(arr1);//[5,4,3,2,1]
// 字符串没有reverse  使用 spilt join reverse 来实现字符串的反转
var str1="hello world";
var arr2=str1.split('');
arr2.reverse();
var str2=arr2.join('');
console.log(str2);// dlrow olleh
*/
/*
//数组方法 indexOf 返回给定元素在数组中第一次出现的位置，没有则返回-1
//接收第二个参数，表示开始搜索的位置
//判断某个值是否存在数组内
var arr1=[10,20,30,20];
if(arr1.indexOf(20,2)>-1){
    console.log('存在');
}
else console.log('不存在');
*/