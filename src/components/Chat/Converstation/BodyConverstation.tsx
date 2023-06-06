import MessageReceived from "./Message/MessageReceived";
import MessageSend from "./Message/MessageSend";

const BodyConverstation: React.FC = () => {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="overflow-y-scroll w-full">
        <div className="flex flex-col justify-end min-h-full">
          <ol className="overflow-hidden">
            <MessageReceived
              avatarSrc={
                "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/318585007_867151754536844_3509429684571264758_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YaFIHFEv-T4AX9p3ivi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBaIK66FhynNuvlRi3gYKEbs7CWWQj_spcVekzSXbY3GA&oe=6483954F"
              }
              content={""}
              at={"10:00"}
              type={1}
              attachment="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
            />
            <MessageReceived
              avatarSrc={
                "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/318585007_867151754536844_3509429684571264758_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YaFIHFEv-T4AX9p3ivi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBaIK66FhynNuvlRi3gYKEbs7CWWQj_spcVekzSXbY3GA&oe=6483954F"
              }
              content={""}
              at={"10:00"}
              type={1}
              attachment="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg"
            />
            <MessageSend
              avatarSrc={""}
              content={
                "Test message asdjklasdklkajsdlkajslk;djaskldjalsjdlasjdkjas;ldjalskdjlaskldajskld;jalksjdklasjdl;kajsl askdjalks;jdlasj;lkd ajskldjaskld;jlasjdlk"
              }
              at={"10:00"}
              type={0}
              attachment=""
            />
            <MessageSend
              avatarSrc={""}
              content={""}
              at={"10:00"}
              type={1}
              attachment="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
            />
            <MessageSend
              avatarSrc={""}
              content={""}
              at={"10:00"}
              type={1}
              attachment="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
            />
            <MessageSend
              avatarSrc={""}
              content={""}
              at={"10:00"}
              type={1}
              attachment="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg"
            />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BodyConverstation;
