# verza bot

## Run the app
1. first clone the repository `git clone <repository address>`
2. install dependencies `npm i`
3. run the application `npm start`

## Structure
Strategies go under the folder `strategies`. Each one of them should be exported from `index` file inside the strategies folder. The params represent the parameters that would be shown on the front to get them and pass them to the strategy (plan: createPlan) function. The strategy function is the whole thing that would be executed as an strategy. All the plan to react and perform trades should go here.

## Technologies
This app uses nodejs express to establish a server.
Writen in Typescript, configured eslint and jest test.
And useing avanza package to connect and utilize avanza api.
And vanila [HTML CSS JS] as frontend in the static folder.


## How should this app work:
<p dir='rtl' align='right'>
در هر نوع استراتژی که استفاده میکنیم   
<br />
در صف خرید و صف فروش،
تصمیم میگیریم بر اساس شرط خاصی،
قراره بخریم یا بفروشیم.   
<br />
برنامه یه دستور خرید میذاره،
،همیشه دستور خرید ما باید بیاد نفر اول صف
گاهی اسپرید اینقدر کمه که ارزشی نداره اصلا وایسه توی صف خرید،
اما وقتی فاصله خرید و فروش زیاده. این باید بیاد اول صف وایسه.
رباتای دیگه میان درخواست رو میذارن جلوی ما،
این برنامه اونموقع باید خودشو بیاره اول صف.
تا کجا؟ تا جایی که تعریف کریدم و جایی که اون شرط خرید ما دیگه برقرار نباشه.
این سعی میکنه با اون رباته رقابت کنه. 
اگه خیلی رقابت شدید بشه و خیلی قیمت بره بالا. برنامه ما باید برگرده به صف دوم،
بعد اون رباته هم بر میگرده میاد پایین،
دوباره ما باید بازی رو از سر بگیریم.
<br />
حالت دوم اینه که بجای این که بالای طرف وایسیم، بریم روش.
ما باید همیشه نفر اول صف باشیم،
تا کجا بره بالا هم یه قائده داره.
</p>

## Plan of a new strategy:
<p dir='rtl' align='right'>
یه برنامه داشته باشیم که خیلی ساده،
فقط فالو کنه،
چون این استراتژی باید به عنوان بیس کار ما باشه. 
اگر اسپرید از ۱ درصد کمتر بود، 
روی قیمت فروشده خرید بذاره. 
اگر بیشتر بود، 
خریدار رو دنبال کنه و روی نفر اول صف خرید بذاره،
تا زمانی که خرید انجام بشه. 
وقتی خرید انجام شد دیگه باید بفروشدش.
</p>

## Buying price calculation:
<p dir='rtl' align='right'>
این مثلا میخواد ۴۰۰ کرون بخوره. هر چی قیمت میره بالاتر تعداد سهام کمتری میتونی بخری.
قیمت و حجم رو باید بر اساس قیمت خریدی که به عنوان ورودی میگیره محاسبه کنه.
</p>