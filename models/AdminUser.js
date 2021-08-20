const mongoose = require('mongoose');

const AdminUserScheme = new mongoose.Schema({
    name: String,
    role: String
});

module.exports = AdminUser = mongoose.module('admin_user', AdminUserScheme);