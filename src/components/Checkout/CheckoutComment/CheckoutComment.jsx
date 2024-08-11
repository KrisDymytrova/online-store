import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography, TextField, IconButton, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { InsertCommentSharp } from "@mui/icons-material";
import { styles } from './styles';

const CheckoutComment = ({ onCommentSubmit }) => {
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [comment, setComment] = useState('');

    const handleLinkClick = () => {
        setIsCommentOpen(true);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleClearComment = () => {
        setComment('');
        setIsCommentOpen(false);
    };

    return (
        <Box sx={styles.container}>
            {!isCommentOpen ? (
                <Box sx={styles.linkContainer}>
                    <InsertCommentSharp sx={styles.icon} onClick={handleLinkClick} />
                    <Link component="button" onClick={handleLinkClick} sx={styles.link}>
                        Додати коментар до замовлення
                    </Link>
                </Box>
            ) : (
                <Box sx={styles.commentBox}>
                    <Box sx={styles.commentContainer}>
                        <TextField
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Коментар до замовлення"
                            variant="outlined"
                            multiline
                            rows={2}
                            fullWidth
                            sx={styles.commentField}
                        />
                    </Box>
                    <IconButton onClick={handleClearComment}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            )}
            <Box sx={styles.noCallContainer}>
                <Checkbox sx={styles.noCallCheckbox} />
                <Typography sx={styles.noCallText}>Не дзвонити для підтвердження замовлення</Typography>
            </Box>
        </Box>
    );
};

CheckoutComment.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
};

export default CheckoutComment;
