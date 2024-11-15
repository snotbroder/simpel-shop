function purchased() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full text-center shadow-lg">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Success</h2>
        <p className="text-lg text-gray-800 mb-6">hej</p>
        <p className="text-sm text-gray-500">Thank you for your purchase!</p>
      </div>
    </div>
  );
}

export default purchased;
