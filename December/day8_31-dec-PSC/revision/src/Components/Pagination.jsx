
export default function  Pagination( {page,handlePage,totalPage} ){

    return(
        <div id='pagination-secction'>
            <button disabled={page<=1} onClick={()=>handlePage(-1)}>PREV</button>
            <button>{page}</button>
            <button disabled={page===Math.ceil(totalPage/3)} onClick={()=>handlePage(1)}>NEXT</button>
        </div>
    )
} 