var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

/*btn.addEventListener("click",function(){
        this.innerText ="按...什麼啦";
        this.style.color = "red";
    }
)*/
var btn =document.getElementById("btn");

btn.addEventListener("click",function(){
        list.innerHTML = list.innerHTML+`
        <div style = "color:blue" class="article">
            <div class="container">
                <table width="400">
                    <tr>
                        <td>${date.value}</td>
                        <td>${title.value}</td>
                        <td>${content.value}</td>
                    </tr>
                </table>
            </div>

        </div>
        `;
        title.value = "";
        content.value = "";
        date.value = Date;
    }

)