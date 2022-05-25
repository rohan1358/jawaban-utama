import cryptoJs from "crypto-js";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// 1. struktur json array object
const information = [
  {
    userId: 1,
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    userId: 2,
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    userId: 2,
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
  {
    userId: 2,
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  },
  {
    userId: 2,
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
  },
  {
    userId: 2,
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
  {
    userId: 2,
    id: 16,
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
  },
  {
    userId: 2,
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
  },
  {
    userId: 2,
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
  },
  {
    userId: 2,
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
  },
  {
    userId: 2,
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
  },
];

function App() {
  const [postsData, setPostsData] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    // 3. Buatlah 1 fitur yang berupa http request ke url : http://jsonplaceholder.typicode.com/posts
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        console.log(
          "hasil fetch http://jsonplaceholder.typicode.com/posts",
          json
        );
        setPostsData(json.slice(0, 10));
      });

    hashing();
  }, []);

  // 7. function hashing
  const hashing = () => {
    // cryptojs
    let date = new Date(),
      newDate = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`,
      strings = `${newDate}RohanAdiPriyatna`;

    let hash = cryptoJs.SHA256(strings);
    let hashToString = hash.toString(cryptoJs.enc.Base64);
    console.log("hasil hashing dari", strings, hashToString);
  };

  // 5. Buatlah 1 function untuk menghapus salah satu data pada soal no
  const deletePostsData = (id) => {
    // 6. Hapuslah salah satu key dari object pada json response soal no

    let deleted = postsData.filter((data) => data.id !== id);
    // console.log(id);
    setPostsData(deleted);
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="m-3 border-1  ">
          {/* 2. Menampilkan 1 label dan buatlah 1 tombol yang bisa merubah value label. */}
          {information.slice(0, 1).map((data, index) => {
            return <RenderInformation data={data} index={index} />;
          })}
        </div>

        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* 4. Buatlah 1 html dengan mencetak hasil response dari soal no 3 ke dalam bentuk table. Tampilkan maksimal 10 data. */}
              {postsData &&
                postsData.map((data, index) => {
                  return (
                    <RenderPostsData
                      data={data}
                      index={index}
                      deletePostsData={deletePostsData}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="end-0">
          <button
            onClick={() => {
              navigate("/login-9");
            }}
            className="btn btn-success fw-bold"
          >
            Move To Answer 9 >
          </button>
        </div>
      </div>
    </>
  );
}

const RenderInformation = ({ data, index }) => {
  const [inputEdit, setInputEdit] = useState(false);
  const [value, setValue] = useState(data.title);
  return (
    <ul className="list-group list-group-horizontal ">
      <li className="list-group-item">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInputEdit(false);
          }}
        >
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            id={index}
            value={value}
            className="form-control m-0 border-0 bg-white  "
            type="text"
            aria-label="default input example"
            style={{
              width: "600px",
            }}
            disabled={!inputEdit}
          />
        </form>
      </li>
      <li className="list-group-item">
        <button
          type="button"
          onClick={async () => {
            await setInputEdit(!inputEdit);
            document.getElementById(index).focus();
          }}
          className="btn btn-primary btn-sm"
        >
          Edit
        </button>
      </li>
    </ul>
  );
};

const RenderPostsData = ({ data, index, deletePostsData }) => {
  return (
    <>
      <tr key={index}>
        <th scope="row">{data.title}</th>
        <th scope="row">
          <button
            type="button"
            onClick={() => {
              deletePostsData(data.id);
            }}
            className="btn btn-danger btn-sm"
          >
            Hapus
          </button>
        </th>
      </tr>
    </>
  );
};

export default App;
