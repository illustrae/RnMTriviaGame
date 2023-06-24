import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RnMLogo from '../assets/images/RnMLogo.png';

const Navbar = ({ auth, user, setUser }) => {
    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("userData"));

    const logOut = () => {
        axios
            .post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                localStorage.clear()
                auth.userToken = false; // Update userToken value
                setUser({
                    userName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  })
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const welcomeMessage = auth.userToken? `Buckle up, ${userData.userName}`: " ";

    let navigation = [
        
        { name: welcomeMessage, current:false},
        { name: 'Dashboard', href: '/game', current: false },
        { name: 'High Scores', href: '/score', current: false },
        { name: 'Logout', current: true, onClick: logOut },
    ];

    if (!auth.userToken) {
        navigation = [
            { name: 'Login', href: '/login', current: true },
        ];
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Disclosure as="nav" className="bg-[#66FCF1]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#1F2833] hover:bg-[#53900F] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center content-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-20 w-auto lg:hidden"
                                        src={RnMLogo}
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-12 w-auto lg:block"
                                        src={RnMLogo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-auto sm:block"> 
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-[#D6CE15] text-white' : 'text-[#1F2833] hover:bg-[#53900F] hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium', 'cursor-pointer',
                                                    {
                                                        'cursor-pointer': !auth.userToken, 
                                                      }
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                                onClick={item.onClick}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-[#D6CE15] text-[#1f2605' : 'text-[#1f2605] hover:bg-[#53900F] hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    onClick={item.onClick}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
