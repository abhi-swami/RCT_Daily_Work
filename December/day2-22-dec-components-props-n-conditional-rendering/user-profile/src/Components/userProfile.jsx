function userProfile(props) {
    const { name, avatar_url, title, skillsets } = props;
    let skills = skillsets.map(function ({id,icon,description}) {
      return (
        <div key={id} className="skills">
          <img src={icon} alt={{description}+"image"} height="20px"   />
          <p>{description}</p>
        </div>
      );
    });
  
    return (
      <div className="userProfile">
        <div>
          <div className="nameFollow">
              <h1>{name}</h1>
              <button>Follow</button>
          </div>
          <p className="title">{title}</p>
          <div className="allskill">{skills}</div>
        </div>
        <img
          className="avatar"
          alt="avatar_url"
          src={avatar_url}
        />
      </div>
    );
  }
  
  export default userProfile;