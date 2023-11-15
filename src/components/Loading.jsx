
export const FullLoading = () => {
  return (
		<div className="w-full h-[100vh] flex items-center justify-center">
			<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
		</div>
	)
}

export const CustomHeightLoading = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
		</div>
	)
}