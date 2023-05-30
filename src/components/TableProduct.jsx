const TableProduct = () => {
	return (
		<div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
			<div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
				<div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
					<div className='w-full md:w-1/2'>
						<form className='flex items-center'>
							<label htmlFor='search' className='sr-only'>
								Buscar
							</label>
							<div className='relative w-full'>
								<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
									<svg
										aria-hidden='true'
										className='w-5 h-5 text-gray-500 dark:text-gray-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
											clipRule='evenodd'
										></path>
									</svg>
								</div>
								<input
									type='text'
									id='search'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none transition duration-150'
									placeholder='Buscar'
								/>
							</div>
						</form>
					</div>
				</div>
				<div className='overflow-x-auto'>
					<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
							<tr>
								<th className='px-4 py-3'>Nombre</th>
								<th className='px-4 py-3'>Precio</th>
								<th className='px-4 py-3 align-reft'>Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr className='border-b dark:border-gray-700'>
								<td className='px-4 py-3'>Apple</td>
								<td className='px-4 py-3'>300</td>
								<td className='px-4 py-3 flex items-center justify-end'>
									<a className='text-white bg-blue-700 hover:bg-blue-800 outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 cursor-pointer'>
										Editar
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TableProduct;
