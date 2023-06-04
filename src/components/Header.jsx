import Logo from "../assets/logo.png";

export default function Header() {
	return (
		<div className="flex justify-between">
			<img className="w-40 h-12" src={Logo} alt="Logo" />
			<ul className="list-none flex gap-8 text-white cursor-pointer">
				<li className="cursor-pointer hover:text-blue-700">Datos</li>
				<li className="cursor-pointer hover:text-blue-700">Inicio</li>
				<li className="cursor-pointer hover:text-blue-700">Productos</li>
				<li className="cursor-pointer hover:text-blue-700">Acerca</li>
			</ul>
		</div>
	);
}
