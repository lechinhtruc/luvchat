import NotificationGroup from "./NotificationGroup";
import NotificationItem from "./NotificationItem";

const NotificationList: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden overflow-y-auto">
      <NotificationGroup title={"Newest"}>
        <NotificationItem
          username="Lê Trực"
          avatarSrc={
            "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/318585007_867151754536844_3509429684571264758_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YaFIHFEv-T4AX9p3ivi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBaIK66FhynNuvlRi3gYKEbs7CWWQj_spcVekzSXbY3GA&oe=6483954F"
          }
          type={0}
          at={"4 giờ trước"}
        />
      </NotificationGroup>

      <NotificationGroup title={"Oldest"}>
        <NotificationItem
          username="Test User 2"
          avatarSrc={
            "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg"
          }
          type={1}
          at={"12 giờ trước"}
        />
        <NotificationItem
          username="Test User 3"
          avatarSrc={
            "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg"
          }
          type={0}
          at={"15 giờ trước"}
        />
      </NotificationGroup>
    </div>
  );
};

export default NotificationList;
