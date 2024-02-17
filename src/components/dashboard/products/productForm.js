import React, { useEffect } from "react";
import {
	Box,
	Button,
	Flex,
	Input,
	Text,
	Textarea,
	Select,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import endpoints from "@/features/api/endpoints";
import axiosInstance from "../../../utils/axios";
import { useSelector } from "react-redux";
const ProductForm = ({ toggleModal }) => {
	const [tags, setTags] = React.useState([]);
	const fetchTags = async () => {
		try {
			const resp = await axiosInstance.get("api/products/tags/");
			setTags(resp.data.results);
			console.log(resp.data);
		} catch (error) {
			console.error(error);
		}
	};
	const router = useRouter();
	const {
		category,
		isLoading: gettingProducts,
		products,
	} = useSelector((state) => state.admin);

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("Title/Name is required"),
		description: Yup.string().required("Description is required"),
		sku: Yup.string().required("Product SKU is required"),
		rating: Yup.string().required("Enter a rating from 0 - 5"),
		defaultCategory: Yup.string().required("Default Category is required"),
		price: Yup.number().required("Product Price is required"),
		salesPrice: Yup.number().required("Sales Price is required"),
		details: Yup.string(),
	});

	const handleDrop = (acceptedFiles) => {
		formik.setFieldValue("productImages", acceptedFiles[0]);
	};
	const onSubmit = async (values, { setSubmitting, resetForm }) => {
		const randomID = Math.floor(Math.random() * 300000000) + 1;

		const data = new FormData();
		data.append("name", values.title);
		data.append("sku", values.sku);
		data.append("featured_image", values.productImages);
		data.append("description", values.description);
		data.append("details", values.details);
		// if (values.file) {
		// 	data.append("file", values.file);
		// }
		data.append("price", values.price);
		data.append("sale_price", values.salesPrice);
		data.append("category", values.defaultCategory);
		data.append("average_rating", values.rating);
		for (const tag of values.tags) {
			data.append("tags", tag);
		}

		try {
			const resp = await axiosInstance.post(endpoints.getProducts, data);

			toast.success("Product Added");
			console.log(resp.data);

			resetForm();
			setSubmitting(false);
		} catch (error) {
			toast.error("Something went wrong, please try again");

			console.error(error);
			setSubmitting(false);
		}
	};
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: handleDrop,
		accept: "image/*",
		multiple: false,
	});
	const initialValues = {
		title: "",
		description: "",
		productImages: null,
		sku: "",
		rating: "",
		Stock: "",
		defaultCategory: "",
		price: "",
		salesPrice: "",
		details: "",
		tag: "",
		tags: [],
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});
	const handleTagChange = (event) => {
		const selectedTag = event.target.value;
		const { tags } = formik.values;

		// Check if the selectedTag is already in the tags array
		if (tags.includes(selectedTag)) {
			// If the tag is already selected, remove it from the tags array
			formik.setFieldValue(
				"tags",
				tags.filter((tag) => tag !== selectedTag)
			);
		} else {
			// If the tag is not selected, add it to the tags array
			formik.setFieldValue("tags", [...tags, selectedTag]);
		}
	};
	useEffect(() => {
		fetchTags();
	}, []);

	return (
		// <Box border="1px solid #000" p={8} className="box-shadow">
		<Box p={{ base: 2, md: 8 }} w={"100%"}>
			<Flex justifyContent="space-between" alignItems="center" mb={4}>
				<Box as="h2" fontSize="1.5rem" fontWeight="bold">
					Add Products
				</Box>
				<Box
					bg="#fff"
					p={1}
					className="box-shadow"
					borderRadius="50%"
					cursor="pointer"
					onClick={toggleModal}
				>
					<MdClose style={{ fontSize: "2.1rem", color: "#333333" }} />
				</Box>
			</Flex>
			<hr
				style={{
					border: "1px solid rgba(255, 199, 0, 0.50)",
					width: "100%",
					opacity: "0.7",
					marginBottom: "1rem",
				}}
			/>
			<Text fontSize={{ base: "1rem", md: "1.25rem" }} color="#262626">
				Add your product and necessary information from here
			</Text>
			<hr
				style={{
					border: "1px solid #000",
					opacity: "0.3",
					width: "100%",
					margin: "1.5rem 0 1rem 0",
				}}
			/>
			<form onSubmit={formik.handleSubmit}>
				{/* Product Title/Name */}

				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="title" className={"label"}>
							Product Title/Name
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Input
							type="text"
							id="title"
							name="title"
							focusBorderColor={"#FFC700"}
							placeholder={"Product Title/Name"}
							value={formik.values.title}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
						/>
						{formik.touched.title && formik.errors.title ? (
							<div className={"error"}>{formik.errors.title}</div>
						) : null}
					</Box>
				</Flex>

				{/* Description */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="description" className={"label"}>
							Product Details
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Textarea
							id="details"
							name="details"
							rows={5}
							focusBorderColor={"#FFC700"}
							placeholder={"Product Description"}
							value={formik.values.details}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
						/>
						{formik.touched.details && formik.errors.details ? (
							<div className={"error"}>{formik.errors.details}</div>
						) : null}
					</Box>
				</Flex>

				{/* Product Images */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="productImages" className={"label"}>
							Product Image
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<div
							{...getRootProps()}
							style={{
								border: "2px dashed #aaa",
								padding: "16px",
								textAlign: "center",
								borderRadius: "8px",
								cursor: "pointer",
							}}
						>
							<input {...getInputProps()} />
							<BsCloudUpload
								style={{
									color: "red",
									fontSize: "3rem",
									marginBottom: "8px",
									margin: "0 auto",
								}}
							/>
							<Text fontSize="1.12rem" fontWeight="500" color="#262626" py={4}>
								{isDragActive
									? "Drop your images here"
									: "Drag 'n' drop an image here, or click to select an image"}
							</Text>
							<Text fontSize="0.9rem" color="#6F6F6F" fontStyle={"italic"}>
								(Only *.jpeg,*.webp and *.png images will be accepted)
							</Text>
						</div>
						{formik.values.productImages && (
							<Box
								mt={6}
								position="relative"
								padding={3}
								bg={"#aaa"}
								width={120}
							>
								<img
									src={URL.createObjectURL(formik.values.productImages)}
									alt="Uploaded product"
									width="100px"
									height="100px"
									style={{ margin: "0 auto", display: "block" }}
								/>
								<Box
									position="absolute"
									top={-2}
									right={-2}
									bg="#fff"
									borderRadius="50%"
								>
									<AiOutlineCloseCircle
										size={26}
										color={"red"}
										style={{
											cursor: "pointer",
										}}
										onClick={() => formik.setFieldValue("productImages", null)}
									/>
								</Box>
							</Box>
						)}
					</Box>
				</Flex>
				<Flex
					Items={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="tags" className={"label"}>
							Product Tags
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Select
							iconSize="0rem"
							// placeholder={"Select tags"}
							bg={"#FFF"}
							id="tags"
							name="tags"
							minHeight={"20vh"}
							multiple
							value={formik.values.tags}
							onChange={handleTagChange}
							onBlur={formik.handleBlur}
						>
							{tags.map((option) => (
								<option
									style={{ fontSize: "1.1rem", marginBottom: "1rem" }}
									key={option?.id}
									value={option?.id}
								>
									{option?.description}
								</option>
							))}
						</Select>
					</Box>
				</Flex>

				{/* Product SKU */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="sku" className={"label"}>
							Product SKU
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Input
							type="text"
							id="sku"
							name="sku"
							focusBorderColor={"#FFC700"}
							placeholder={"Product SKU"}
							value={formik.values.sku}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
						/>
						{formik.touched.sku && formik.errors.sku ? (
							<div className={"error"}>{formik.errors.sku}</div>
						) : null}
					</Box>
				</Flex>

				{/* Product Barcode */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="rating" className={"label"}>
							Product Rating
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Input
							type="number"
							id="rating"
							name="rating"
							focusBorderColor={"#FFC700"}
							placeholder={"Product Rating"}
							value={formik.values.rating}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
						/>
						{formik.touched.rating && formik.errors.rating ? (
							<div className={"error"}>{formik.errors.rating}</div>
						) : null}
					</Box>
				</Flex>

				{/* Category */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="Stock" className={"label"}>
							Stock
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Input
							id="Stock"
							type="number"
							name="Stock"
							focusBorderColor={"#FFC700"}
							value={formik.values.Stock}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
							placeholder="1"
						/>
					</Box>
				</Flex>

				{/* Default Category */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="defaultCategory" className={"label"}>
							Category
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<select
							id="defaultCategory"
							name="defaultCategory"
							value={formik.values.defaultCategory}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{
								padding: "10px",
								border: "1px solid #ccc",
								borderRadius: "5px",
								width: "100%",
							}}
						>
							<option value="" disabled>
								Select a category
							</option>
							{category.map((cat) => (
								<option key={cat.id} value={cat.id}>
									{cat.name}
								</option>
							))}
						</select>
						{formik.touched.defaultCategory && formik.errors.defaultCategory ? (
							<div className={"error"}>{formik.errors.defaultCategory}</div>
						) : null}
					</Box>
				</Flex>

				{/* Product Price */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="price" className={"label"}>
							Product Price
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Input
							type="number"
							id="price"
							name="price"
							focusBorderColor={"#FFC700"}
							placeholder={"0"}
							value={formik.values.price}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
						/>
						{formik.touched.price && formik.errors.price ? (
							<div className={"error"}>{formik.errors.price}</div>
						) : null}
					</Box>
				</Flex>

				{/* Sales Price */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="salesPrice" className={"label"}>
							Sales Price
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Input
							type="number"
							id="salesPrice"
							name="salesPrice"
							focusBorderColor={"#FFC700"}
							placeholder={"0"}
							value={formik.values.salesPrice}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
						/>
						{formik.touched.salesPrice && formik.errors.salesPrice ? (
							<div className={"error"}> {formik.errors.salesPrice}</div>
						) : null}
					</Box>
				</Flex>

				{/* Product Slug */}
				<Flex
					alignItems={{ base: "flex-start", md: "center" }}
					mb={6}
					flexDir={{ base: "column", md: "row" }}
				>
					<Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
						<label htmlFor="details" className={"label"}>
							Product Description
						</label>
					</Box>
					<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
						<Input
							type="text"
							id="description"
							name="description"
							focusBorderColor={"#FFC700"}
							placeholder={"Product description"}
							value={formik.values.description}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							style={{ border: "1px solid #ccc" }}
						/>
						{formik.touched.description && formik.errors.description ? (
							<div className={"error"}>{formik.errors.description}</div>
						) : null}
					</Box>
				</Flex>

				<hr
					style={{
						border: "1px solid #000",
						opacity: "0.6",
						width: "100%",
						margin: "3rem 0 1rem 0",
					}}
				/>
				{/* Submit Button */}
				<Flex
					mt={12}
					mb={4}
					justifyContent="center"
					gap={{ base: "1rem", md: "3rem" }}
					flexDir={{ base: "column", md: "row" }}
				>
					<Button
						type="submit"
						bg="#FFC700"
						color="#1A202C"
						fontWeight={600}
						padding={" 0.9375rem 3rem"}
						size="lg"
					>
						ADD PRODUCT
					</Button>
					<Button
						onClick={toggleModal}
						bg="#000"
						color="#fff"
						fontWeight={600}
						size="lg"
						padding={".9375rem 4.6875rem"}
					>
						CANCEL
					</Button>
				</Flex>
			</form>
			<Text
				fontSize={"0.9375rem"}
				fontWeight={"400"}
				position={"relative"}
				bottom={"-2rem"}
				color={"rgba(108, 117, 125, 1)"}
				left={"2rem"}
			>
				© 2023 DCFoodBank. All Rights Reserved.
			</Text>
		</Box>
	);
};

export default ProductForm;
