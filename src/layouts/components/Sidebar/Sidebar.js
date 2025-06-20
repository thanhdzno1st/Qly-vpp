import { NavLink, useNavigate } from 'react-router-dom';
import {
    Home,
    FileText,
    UserCircle,
    Users,
    Key,
    ShoppingCart,
    Book,
    ChartColumnBig,
    Layers,
    Monitor,
    HardHat,
    FileSignature,
    ClipboardList,
    CheckSquare, // dùng cho "Nghiệm thu"
    Handshake,
    BarChart2,
} from 'lucide-react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

export default function Sidebar() {
    const user = useSelector((state) => state.user.currentUser);

    const navigate = useNavigate();

    const commonMenu = [{ name: 'Tổng quan', icon: <Home size={18} />, to: config.routes.home }];

    const privateMenu = [
        { name: 'Gửi yêu cầu', icon: <FileText size={18} />, to: config.routes.sendrequest, quyen: 7 },
        { name: 'Quản lý thiết bị', icon: <Monitor size={18} />, to: config.routes.Quanlythietbi, quyen: 1 },
        { name: 'Quản lý tài khoản', icon: <Users size={18} />, to: config.routes.Qlytaikhoan, quyen: 1 },
        { name: 'Phân quyền tài khoản', icon: <Key size={18} />, to: config.routes.Phanquyen, quyen: 1 },
        { name: 'Danh sách nhà thầu', icon: <HardHat size={18} />, to: config.routes.nhathau, quyen: 2 },
        { name: 'Danh sách hợp đồng ', icon: <FileSignature size={18} />, to: config.routes.hopdong, quyen: 2 },
        { name: 'Duyệt yêu cầu', icon: <ClipboardList size={18} />, to: config.routes.yeucau, quyen: 2 },
        { name: 'Thống kê hệ thống', icon: <BarChart2 size={18} />, to: config.routes.dashboard, quyen: 2 },
        { name: 'Duyệt kế hoạch mua sắm', icon: <ShoppingCart size={18} />, to: config.routes.Duyetkehoach, quyen: 6 },
        { name: 'Duyệt KH chọn nhà thầu', icon: <Book size={18} />, to: config.routes.Duyetnhathau, quyen: 6 },
        { name: 'Duyệt ngân sách ', icon: <ChartColumnBig size={18} />, to: config.routes.Duyetngansach, quyen: 8 },
        { name: 'Thanh toán hợp đồng', icon: <Layers size={18} />, to: config.routes.Thanhtoanhopdong, quyen: 8 },
        { name: 'Kế hoạch', icon: <FileText size={18} />, to: config.routes.Kehoach, quyen: 4 },
        { name: 'Nghiệm thu', icon: <CheckSquare size={18} />, to: config.routes.Nghiemthu, quyen: 4 },
        { name: 'Mời thầu', icon: <Handshake size={18} />, to: config.routes.Moithau, quyen: 4 },
        { name: 'Thông tin tài khoản', icon: <UserCircle size={18} />, to: config.routes.profile },
    ];

    const filteredMenu = user
        ? privateMenu.filter((item) => item.name === 'Thông tin tài khoản' || item.quyen === user.maVaiTro)
        : [];

    const finalMenu = [...commonMenu, ...filteredMenu];

    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-content')}>
                <nav className={cx('sidebar-nav')}>
                    {finalMenu.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.to}
                            className={({ isActive }) => cx('sidebar-item', { active: isActive })}
                        >
                            <span className={cx('sidebar-icon')}>{item.icon}</span>
                            <span className={cx('sidebar-text')}>{item.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
}
