import "./App.css";
import UserProfile from "./Components/userProfile";

export default function App() {
  return (
    <div className="App">
      <UserProfile
        title=" MERN Stack Software Engineer"
        name="Random Kumari"
        avatar_url="https://avatars.githubusercontent.com/u/107476738?v=4"
        skillsets={[
          {
            id:1,
            icon:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "ReactJS"
          },
          {
            id:2,
            icon:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIoQh9KhmY5RfgyzS1OEk--Tqp6V9vQjfCtA&usqp=CAU",
            description: "NodeJS"
          },
          {
            id:3,
            icon:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoZrwu2d2z7qDqUA0WAtfVqMtsgRLzyLqAjhcOtI&s",
            description: "Javascript"
          },
          {
            id:4,
            icon:
              "https://w7.pngwing.com/pngs/286/519/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-azure-sql-data-warehouse-logo-text-logo-microsoft-azure.png",
            description: "SQL"
          },
          {
            id:5,
            icon:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
            description: "Python"
          },
          {
            id:6,
            icon:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YuLhctx0vcfwtEv35PwVCLmDv94o4SXjgw&usqp=CAU",
            description: "MongoDB"
          },
          {
            id:7,
            icon:
              "https://tse1.mm.bing.net/th?id=OIP.b47wakd9KnB4VLGmq8ulcwHaHa&pid=Api&P=0",
            description: "React Hooks"
          },
          {
            id:8,
            icon:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "React Native"
          }
        ]}
      />
    </div>
  );
}
