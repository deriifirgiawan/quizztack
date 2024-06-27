"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function QuizPage() {
	const [payload, setPayload] = useState({
		name: "",
		email: "",
		no: "",
	});

	const handleSubmit = () => {
		console.log(payload);
	};
	return (
		<main className="px-4 pt-24 block lg:flex md:flex justify-center items-center">
			<section className="w-full md:w-[600px] lg:w-[600px]">
				<h2 className="text-4xl font-medium">
					Bantu Kami isi kuesioner tentang Pilkada 2024
				</h2>
				<p className="mt-4">
					Aturan<span className="text-red-500">*</span>
				</p>

				<ul className="mt-4">
					<li className="text-sm">- Pastikan semua pertanyaan terisi</li>
					<li className="text-sm">- Pastikan nomor Whatsapp dan Email benar</li>
					<li className="text-sm">
						- Saldo Dana Rp 250.000 akan dikirim 1 x 24 jam terhitung setelah
						selesai mengisi semua kuesioner
					</li>
				</ul>
				<div className="mt-4">
					<Input
						value={payload.name}
						onChange={(event) =>
							setPayload({ ...payload, name: event.target.value })
						}
						placeholder="Nama Lengkap"
					/>
				</div>

				<div className="mt-4">
					<Input
						value={payload.email}
						onChange={(event) =>
							setPayload({ ...payload, email: event.target.value })
						}
						placeholder="Email"
					/>
				</div>

				<div className="mt-4">
					<Input
						value={payload.no}
						onChange={(event) =>
							setPayload({ ...payload, no: event.target.value })
						}
						placeholder="No. WhatsApp"
					/>
				</div>

				<div className="mt-4 flex items-end justify-end">
					<Button
						onClick={handleSubmit}
						className="bg-[#42b72a] hover:bg-[#55a744] "
					>
						Lanjutkan
					</Button>
				</div>
			</section>
		</main>
	);
}
