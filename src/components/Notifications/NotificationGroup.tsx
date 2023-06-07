type NotificationGroupProps = {
  children?: React.ReactNode;
  title: string;
};

const NotificationGroup: React.FC<NotificationGroupProps> = ({
  children,
  title,
}) => {
  return (
    <div className="flex flex-col overflow-hidden mt-2">
      <h4 className="font-semibold text-lg opacity-90 mb-1">{title}</h4>
      <div className="flex flex-col gap-y-2">{children}</div>
    </div>
  );
};

export default NotificationGroup;
