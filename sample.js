const headerList = ["userId","firstName", "lastName", "age", "salary", "jobs"];

function getUser() {
    let userData;
    (async () => {
        userData = await fetch('http://localhost:3000/bacheusers')
            .then((response) => response.json())
            .then((data) => {
                // table要素を生成
                var table = document.createElement('table');
                table.setAttribute("class", "table table-dark");
                // tr部分のループ
                for (var i = 0; i < data.length; i++) {
                    // tr要素を生成
                    var tr = document.createElement('tr');
                    // th・td部分のループ
                    for (var j = 0; j < headerList.length; j++) {
                        // 1行目のtr要素の時
                        if (i === 0) {
                            // th要素を生成
                            var th = document.createElement('th');
                            // th要素内にテキストを追加
                            th.textContent = headerList[j];
                            th.setAttribute("scope", "col")
                            // th要素をtr要素の子要素に追加
                            tr.appendChild(th);
                        } else {
                            // td要素を生成
                            var td = document.createElement('td');
                            // td要素内にテキストを追加
                            td.textContent = data[i][headerList[j]];
                            // td要素をtr要素の子要素に追加
                            tr.appendChild(td);
                            tr.setAttribute("scope", "row");
                        }
                    }
                    // tr要素をtable要素の子要素に追加
                    table.appendChild(tr);
                }
                // 生成したtable要素を追加する
                document.getElementById('maintable_getAll').appendChild(table);
            });
    })();
};

function postUser() {
    let userData;
    const method = 'POST';
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const jobs = document.getElementById('jobs').value;
    const salary = document.getElementById('salary').value;
    const birtday = document.getElementById('birthday').value;
    let tempUser = {
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "jobs": jobs,
        "salary": salary,
        "birthday": birtday,
    };
    const body = JSON.stringify(tempUser);
    console.log(body);

    (async () => {
        await fetch("http://localhost:3000/bacheusers", { method, headers, body, mode: "cors" }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                // document.getElementById("out_firstName").innerHTML = data.firstName;
                // console.log(data);
            }).catch(console.error);
    })();
}
function deleteUser() {
    let userData;
    const method = 'DELETE';
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const userId = document.getElementById('userId').value;


    (async () => {
        await fetch(`http://localhost:3000/bacheusers/${userId}`, { method, headers, mode: "cors" }).then((res) => res.json())
            .then((data) => {
                console.log(data);
            }).catch(console.error);
    })();
}

function patchUser() {
    let userData;
    const method = 'PATCH';
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const userId = document.getElementById('patchUserId').value;
    const age = document.getElementById('patchAge').value;
    const jobs = document.getElementById('patchJobs').value;
    const salary = document.getElementById('patchSalary').value;
    let tempUser = {
        "age": age,
        "jobs": jobs,
        "salary": salary,
    };
    const body = JSON.stringify(tempUser);
    console.log(body);

    (async () => {
        await fetch(`http://localhost:3000/bacheusers/${userId}`, { method, headers, body, mode: "cors" }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                // document.getElementById("out_firstName").innerHTML = data.firstName;
                // console.log(data);
            }).catch(console.error);
    })();
}

