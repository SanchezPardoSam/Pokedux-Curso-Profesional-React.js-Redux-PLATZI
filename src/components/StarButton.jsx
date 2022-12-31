import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StarButton = ({ infavorite, onClick }) => {
    const Icon = infavorite ? StarFilled  : StarOutlined 
    return <Button icon={<Icon/>} onClick={onClick} />
}

export default StarButton;