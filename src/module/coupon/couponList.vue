<template>
    <div class="coupon-list">
        <el-row>
            <el-button type="primary" size="small" @click="dialogVisible = true">添加优惠券</el-button>
        </el-row>
		<div class="table-content">
			<el-table :data="couponTableData" border style="width: 100%">
			    <template slot="empty">
			        <img class="empty-icon" src="../../icons/tableNothing.png" alt srcset />
			        <p>暂无数据</p>
			    </template>
			    <el-table-column prop="name" label="名称"></el-table-column>
			    <el-table-column prop="name" label="发放总量"></el-table-column>
			    <el-table-column prop="address" label="库存"></el-table-column>
			    <el-table-column prop="date" label="面额"></el-table-column>
			    <el-table-column prop="name" label="使用条件"></el-table-column>
			    <el-table-column prop="time" label="时间设置"></el-table-column>
			    <el-table-column prop="date" label="操作"></el-table-column>
			</el-table>
		</div>
        
        <el-dialog title="优惠券" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
            <el-form :model="couponFormData" label-width="100px" :rules="formRules" ref="ruleForm">
                <el-form-item label="名称 :" prop="name">
                    <el-input size="mini" v-model="couponFormData.name"></el-input>
                </el-form-item>
                <el-form-item label="发放总量 :" prop="name">
                    <div class="form-every-item">
                    	<el-input size="mini" v-model="couponFormData.name"></el-input>
                    	<div class="form-every-item-font">张</div>
                    </div>
                </el-form-item>
                <el-form-item label="面额 :" prop="name">
					<div class="form-every-item">
						<el-input size="mini" v-model="couponFormData.name"></el-input>
						<div class="form-every-item-font">元</div>
					</div>
                </el-form-item>
                <el-form-item label="使用条件 :" prop="name">
                    <el-radio v-model="couponFormData.radio" label="1">不限制</el-radio>
                    <el-radio v-model="couponFormData.radio" label="2">
                        满
                        <el-input size="mini" placeholder="请输入内容"></el-input>元
                    </el-radio>
                </el-form-item>
                <el-form-item label="每人限领 :" prop="name">
                    <el-select size="mini" v-model="couponFormData" placeholder="无限制">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="时间限制 :" prop="name">
                    <el-radio v-model="couponFormData.radio" label="1">不限制</el-radio>
                    <el-radio v-model="couponFormData.radio" label="2">按领取日期</el-radio>
                    <el-date-picker size="mini" v-model="value1" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'coupon',
        data() {
            return {
                couponTableData: [],
                couponFormData: {
                    name: '',
                    radio: '1'
                },
                formRules: {
                    name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
                },
                dialogVisible: false
            };
        },
        methods: {
            handleClose() {
                this.dialogVisible = false;
            }
        }
    };
</script>

<style scoped="scoped">
.coupon-list {
    width: 100%;
    padding: 20px;
}
.coupon-list .el-radio__input.is-checked + .el-radio__label {
    color: #606266;
}
.table-content {
	margin-top: 20px;
}
.empty-icon {
	margin-top: 35px;
	width: 60px;
	height: 50px;
}
.form-every-item {
	display: flex;
}
.form-every-item-font {
	margin-left: 5px;
}
</style>
