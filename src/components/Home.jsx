import Header from "./Header";
import hero_img from "../assets/hero_image.png";
import hero_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";

export default function Home() {
	return (
		<div className="flex justify-between bg-slate-500">
			<div className="flex flex-[3_3_0%] flex-col gap-8 p-8 pt-6">
				<Header />
				<div className="mt-16 bg-[#363d42] rounded-full w-fit p-4 flex items-center justify-start relative">
					<div className="absolute bg-blue-800 w-[5.5rem] h-[80%] rounded-full left-2 z-[1]"></div>
					<span className="uppercase text-white z-[2]">
						El mejor sitio web de Fitness que puedes visitar
					</span>
				</div>
				{/* Home Main Section */}
				<div className="flex flex-col uppercase gap-6 font-bold text-7xl text-white inherit">
					<div>
						<span className="stroke-text">Forma</span>
						<span> Tu</span>
					</div>
					<div>
						<span>Cuerpo Ideal</span>
					</div>
				</div>
				{/* Home Buttons Section */}
				<div className="gap-4 font-normal flex">
					<button className="btn bg-blue-700 text-white border-transparent">
						Productos
					</button>
					<button className="btn bg-transparent text-white border-blue-700">
						Ver Mas
					</button>
				</div>
			</div>
			<div className="flex-1 text-white relative bg-blue-900">
				<button className="btn absolute right-12 top-8">Join Now</button>
				<div className="flex flex-col gap-4 w-fit items-start p-4 bg-slate-500 rounded-md top-28 right-16 absolute ">
					<img src={Heart} alt="heart" />
					<span className="text-gray-600 ">Heart Rate</span>
					<span> 116 rpm</span>
				</div>
				<img
					className="top-40 right-40 w-96 absolute z-[2]"
					src={hero_img}
					alt="Home Image"
				/>
				<img
					className="top-16 absolute w-60 z-[1] right-96"
					src={hero_back}
					alt="Home Back"
				/>
			</div>
		</div>
	);
}
