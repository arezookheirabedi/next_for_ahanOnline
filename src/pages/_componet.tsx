import Document, { Html, Head, Main, NextScript,DocumentContext } from 'next/document'


export default class MyDocument extends Document {
constructor(props:any){
super(props)

}


render() {
return (
<Html>
<Head>

<meta name="keywords" content={"test"}></meta>

</Head>

<body
className="rtl"
>
<Main />
<NextScript />
</body>
</Html>
)
}
}





