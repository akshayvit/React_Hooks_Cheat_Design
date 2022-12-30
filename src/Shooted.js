export function Shooted(props) {
    const {scount}=props;
    if(scount==0) return <h1>ALL SHOOTED</h1>
    else return <h1>{scount} SHOOTED</h1>
}

