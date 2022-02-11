const Controller = require("../controller");

beforeEach(() => {
  controller = new Controller();
  controller.kits = [
    { id: 1, label_id: "47-561-8310", shipping_tracking_code: "5796955810" },
    { id: 2, label_id: "26-053-8910", shipping_tracking_code: "1667895265" },
    { id: 3, label_id: "63-921-1364", shipping_tracking_code: "6955996673" },
    { id: 4, label_id: "94-748-4437", shipping_tracking_code: "7763306017" },
  ];
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

test('[searchKits] should respond with 200 on successful request', async () => {
  const mockReq = { query: { labelId: '921' }}
  const mockRes = mockResponse()
  await controller.searchKits(mockReq, mockRes)
  expect(mockRes.status).toHaveBeenCalledWith(200);
});

test('[searchKits] should return kits matching provided label_id', async () => {
  const mockReq = { query: { labelId: '921' }}
  const mockRes = mockResponse()
  await controller.searchKits(mockReq, mockRes)
  expect(mockRes.send).toHaveBeenCalledWith(expect.arrayContaining([controller.kits[2]]));
});

test('[getKitById] should respond with 200 on successful request', async () => {
  const mockReq = { params: { kitId: '2' }}
  const mockRes = mockResponse()
  await controller.getKitById(mockReq, mockRes)
  expect(mockRes.status).toHaveBeenCalledWith(200);
});

test('[getKitById] should respond with expected kit', async () => {
  const mockReq = { params: { kitId: '2' }}
  const mockRes = mockResponse()
  await controller.getKitById(mockReq, mockRes)
  expect(mockRes.send).toHaveBeenCalledWith(expect.objectContaining(controller.kits[1]));
});