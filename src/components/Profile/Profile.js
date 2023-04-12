export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">@pmarica</p>
      <p class="location">Salvador, Brasil</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
  </div>
);

// У розмітці компонент записується як JSX-тег
// ReactDOM.createRoot(document.getElementById('root')).render(<Product />);
