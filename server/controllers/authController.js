const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.register = async (req, res) => {
  console.log("register");
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ message: "User registered", user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  );
  res.json({ message: "Login successful", token });
};
exports.registerAdmin = async (req, res) => {
  const { name, email, password, adminToken } = req.body;

  // Validate admin token
  if (adminToken !== process.env.ADMIN_CREATION_TOKEN) {
    return res
      .status(403)
      .json({ message: "Unauthorized to create admin user" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const admin = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });
    console.log("Created Admin User:", admin);
    res.status(201).json({ message: "Admin user created", admin });
  } catch (err) {
    console.error("Error creating admin user:", err);
    res.status(500).json({ message: "Failed to create admin user" });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

exports.updateUser = async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "User updated" });
};

exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: "User deleted}" });
}

exports.deleteAllUsers = async (req, res) => {
  await User.destroy({ where: {} });
  res.json({ message: "All users deleted" });
};

exports.getProfile = async (req, res) => {
  res.json(req.user);
};

exports.updateProfile = async (req, res) => {
  await User.update(req.body, { where: { id: req.user.id } });
  res.json({ message: "Profile updated" });
};

exports.deleteProfile = async (req, res) => {
  await User.destroy({ where: { id: req.user.id } });
  res.json({ message: "Profile deleted" });
};


